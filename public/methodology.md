[[HackTheBox]]
[[Tryhackme]]
[[Linux CTF]]
[[Windows CTF]]
## Important links

Gtfobins: [https://gtfobins.github.io/gtfobins/vi/](https://gtfobins.github.io/gtfobins/vi/)

Reverse shells: [https://www.revshells.com/](https://www.revshells.com/)

Crack hashes : [https://crackstation.net/](https://crackstation.net/)

Code execution **: [https://github.com/payloadbox/command-injection-payload-list**](https://github.com/payloadbox/command-injection-payload-list**)

**Special Search engines:**

- [https://viewdns.info/](https://viewdns.info/)
- [https://threatintelligenceplatform.com/](https://threatintelligenceplatform.com/)
- [https://search.censys.io/](https://search.censys.io/)
- [https://www.shodan.io/](https://www.shodan.io/) (Can use it in command line too after configuring API key)

```jsx
//To get my internet facing IP address
shodan myip
```

## Recon

Built in commands:

```jsx
whois [domain]
nslookup [domain]
dig [domain]
host [domain]
traceroute //tracert on windows
```

We can use the special search engines : viewdns, censys, shodan,…

We can use **recon-ng** for OSINT:

```jsx
recon-ng
	workspaces create [workspace]
	
recon-ng -w [workspace]
	db insert domains
	marketplace search [thing]
	marketplace install [module]
```

## Search for vulnerabilities

```jsx
//finds vulnerabilities on the thing
searchsploit thething

msfconsole
	search thething
```

## Upgrade an unstable Linux Shell

```jsx
python3 -c 'import pty;pty.spawn("/bin/bash")'
python -c 'import pty;pty.spawn("/bin/bash")'

// CTRL + Z

stty raw -echo; fg
export TERM=xterm
```

## Internal Scan

To list what services are listening on what ports

(used to identify running services on target machine after we get initial foothold)

```jsx
//remember to run without grep first to see all
netstat -ano | grep [Port Number]
```

## Get a windows Shell

- Use **impacket** to connect to certain services in windows such as **ms_sql**

```jsx
python3 mssqlclient.py ARCHETYPE/sql_svc@{TARGET_IP} -windows-auth
```

## Windows Privesc

**MSSQL cheatsheet :** [https://pentestmonkey.net/cheat-sheet/sql-injection/mssql-sql-injection-cheat-sheet](https://pentestmonkey.net/cheat-sheet/sql-injection/mssql-sql-injection-cheat-sheet)

- check the file **ConsoleHost_history.txt** equivalent of **.bash_history in linux**

This file may contain passwords

```jsx
//It is located in :
C:\\Users\\sql_svc\\AppData\\Roaming\\Microsoft\\Windows\\PowerShell\\PSReadline\\
```

Then we can use **impacket** again to ge a new shell but as and admin this time if we found the pass in **ConsoleHost_history.txt**

```jsx
python3 psexec.py administrator@{TARGET_IP}
```

- Use **winPEASx64.exe**

## Webapp Penetration testing

**Username enumeration:**

```jsx
ffuf -w /usr/share/wordlists/SecLists/Usernames/Names/names.txt \\
-X POST -d "username=FUZZ&email=x&password=x&cpassword=x" \\
-H "Content-Type: application/x-www-form-urlencoded" \\
-u <http://10.10.80.107/customers/signup> -mr "username already exists"

```

**Password Bruteforce**

```jsx
ffuf -w valid_usernames.txt:W1,\\
/usr/share/wordlists/seclists/Passwords/Common-Credentials/10-million-password-list-top-100.txt:W2 \\
-X POST \\
-d "username=W1&password=W2" \\
-H "Content-Type: application/x-www-form-urlencoded" \\
-u <http://10.10.80.107/customers/login> -fc 200
```

## Pivoting

[Pivoting](https://www.notion.so/Pivoting-13856b659e5080039e5aec4e0880e49d?pvs=21)

## Windows Active Directory

If it’s a domain controller try LDAP an example machine i tried is **Cicada** on **Hackthebox**

### **LDAP:**

```jsx
ldapsearch -x -H ldap://$target_hostname -b $domain_component
```

![{38787CE5-CB62-418C-B098-2E401CE25F96}.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/043808d7-4382-42d4-89b8-b679a91d47a7/13ec450d-e10a-41f6-91b1-9ce711d26119/38787CE5-CB62-418C-B098-2E401CE25F96.png)

It is configured but i need credentials to access in this example

### **SMB:**

```bash
smbclient -N -L //$target_hostname

#Login with credentials
smbclient -U login%password -L //10.10.11.42

smbclient -N //$target_hostname/myshare
	ls, get, cd...

#Get a share with credentials
smbclient -U 'login%password' //10.10.11.35/share
```

- enum4linux: A tool designed for gathering information from Windows and Samba (SMB) systems, we can use it to enumerate users too

```bash
enum4linux -a -u 'username' -p 'password' 10.10.10.10

#without a user and a password
enum4linux -a infiltrator.htb
```

### **Kerbrute:**

Duplicate and Save a List of Usernames to Spray at the KDC

```bash
cat /usr/share/wordlists/seclists/Usernames/xato-net-10-million-usernames.txt | tr '[:upper:]' '[:lower:]' | sort -u > kerberos_users.txt
```

Use Kerbrute to Enumerate Valid Usernames

```bash
kerbrute userenum -d domain.tld --dc dc-ip-here -t 100 -o kerbrute.log ./kerberos_users.txt
```

### **crackmapexec:** command to enumerate users

- enum4linux enumerates users too but i think we need credentials to use it

```bash
crackmapexec smb 10.10.10.10 -d domain.local -u 'guest' -p '' --users

#This command attempts to connect to the target SMB server using the guest account
#(with no password) and, if successful, retrieves a list of all user accounts within
#the specified domain.
```

```bash
#enumerate users
crackmapexec smb 10.10.10.10 -d domain.local -u 'guest' -p '' --rid-brute
```

The `--rid-brute` option uses Relative Identifier (RID) brute-forcing, iterating through RIDs in the domain to gather information about user and group accounts. Commonly used RIDs are standardized (e.g., `500` for `Administrator`, `501` for `Guest`), and RID brute-forcing takes advantage of this by querying these values to identify accounts.

```bash
crackmapexec smb 10.10.10.10 -d domain.local -u users.txt -p pass.txt
```

feroxbuster

[https://github.com/Mag1cByt3s/MagicRecon](https://github.com/Mag1cByt3s/MagicRecon)

[https://github.com/Tib3rius/AutoRecon](https://github.com/Tib3rius/AutoRecon)

[https://github.com/gokulapap/Reconator](https://github.com/gokulapap/Reconator)

[https://github.com/sujayadkesar/auto-rec0n](https://github.com/sujayadkesar/auto-rec0n)