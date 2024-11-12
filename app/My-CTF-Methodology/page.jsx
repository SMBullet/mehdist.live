"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check } from 'lucide-react';

const methodologyContent = `
Welcome to my personal Capture The Flag (CTF) methodology! This guide will walk you through the key tools, techniques, and strategies I use to solve CTF challenges, from reconnaissance to exploitation. As the world of cybersecurity evolves, this methodology continues to grow, and I'll be keeping it updated with my latest tools and findings.

---

## Important Links

- **GTFObins (Privilege Escalation Tools)**: [gtfobins.github.io](https://gtfobins.github.io/gtfobins/vi/)  
  A comprehensive collection of Unix binaries that can be exploited for privilege escalation.
  
- **Reverse Shells**: [revshells.com](https://www.revshells.com/)  
  A resource for generating reverse shell payloads in multiple programming languages and for different operating systems.
  
- **Crack Hashes**: [crackstation.net](https://crackstation.net/)  
  Crackstation is an online service for cracking password hashes with a massive wordlist.

- **Command Execution Payloads**: [GitHub: PayloadBox](https://github.com/payloadbox/command-injection-payload-list)  
  A curated list of command injection payloads for various systems and services.

---

## Special Search Engines

These specialized search engines are invaluable for performing reconnaissance and OSINT (Open Source Intelligence) gathering:

- [ViewDNS](https://viewdns.info/)  
- [Threat Intelligence Platform](https://threatintelligenceplatform.com/)
- [Censys](https://search.censys.io/)
- [Shodan](https://www.shodan.io/)  
  *(Command line access is available after configuring the API key. Use \`shodan myip\` to discover your public IP)*

---

## Reconnaissance

### Built-in Commands for Recon

Reconnaissance is often the first step in a CTF and is crucial for mapping out the target environment. The following tools are fundamental for gathering information:

\`\`\`bash
# WHOIS Lookup
whois [domain]

# DNS Lookup
nslookup [domain]
dig [domain]
host [domain]

# Traceroute to identify network hops
traceroute [domain]   # (Windows: tracert [domain])
\`\`\`

### Using Special Search Engines
You can also leverage services like ViewDNS, Shodan, and Censys to find information about the target domain, subdomains, IPs, open ports, etc.

### Recon-ng (OSINT Framework)
recon-ng is a powerful OSINT tool with a modular approach that integrates with various sources for gathering and analyzing information. It allows for automated collection of intelligence across domains and IPs.

\`\`\`bash
# Start recon-ng
recon-ng

# Create a workspace for your target
workspaces create [workspace]

# Switch to the workspace
recon-ng -w [workspace]

# Insert domains into your workspace
db insert domains [your_target_domain]

# Install and use OSINT modules
marketplace search [module_name]
marketplace install [module_name]
\`\`\`

## Searching for Vulnerabilities

### Searchsploit
Searchsploit is a command-line tool that provides an interface to the Exploit Database. You can quickly search for known vulnerabilities related to your target system.

\`\`\`bash
# Search for exploits related to a specific target
searchsploit [target_name]
\`\`\`

### Metasploit Framework
Metasploit is an essential tool for penetration testing, and it's commonly used to automate exploitation once you've identified a vulnerability.

\`\`\`bash
# Start Metasploit
msfconsole

# Search for exploits related to your target
search [target_name]
\`\`\`

## Upgrade an Unstable Linux Shell
After gaining initial access to a Linux machine, the default shell may be unstable or limited. You can upgrade it to a more stable interactive shell.

\`\`\`bash
# Use Python to spawn a fully interactive shell
python3 -c 'import pty; pty.spawn("/bin/bash")'
python -c 'import pty; pty.spawn("/bin/bash")'

# Press CTRL+Z to suspend the process and regain control of the terminal

# Use stty to fix the terminal
stty raw -echo; fg

# Set the terminal type to xterm for better control
export TERM=xterm
\`\`\`

## Get a Windows Shell
If you're exploiting a Windows system, tools like Impacket are essential for connecting to Windows services such as MS SQL.

\`\`\`bash
# Use impacket to connect to MS SQL
python3 mssqlclient.py ARCHETYPE/sql_svc@{TARGET_IP} -windows-auth
\`\`\`

## Windows Privilege Escalation

### MSSQL Cheatsheet
One of the most common methods for Windows privilege escalation is leveraging SQL injection in MSSQL. You can find a cheatsheet for common SQL injection payloads here: MSSQL SQL Injection Cheat Sheet

Check the file ConsoleHost_history.txt (equivalent of .bash_history in Linux). This file may contain passwords.

\`\`\`bash
# File location:
C:\\Users\\sql_svc\\AppData\\Roaming\\Microsoft\\Windows\\PowerShell\\PSReadline\\
\`\`\`

If passwords are found in ConsoleHost_history.txt, use Impacket again to get a new shell as an admin:

\`\`\`bash
# Get a shell as Administrator
python3 psexec.py administrator@{TARGET_IP}
\`\`\`

### winPEASx64.exe
Use winPEASx64.exe for Windows Privilege Escalation. This tool automates the process of searching for privilege escalation vectors on a Windows machine.

## Web Application Penetration Testing

### Username Enumeration
You can enumerate usernames on web applications by testing for responses from different usernames. Using ffuf for fuzzing:

\`\`\`bash
ffuf -w /usr/share/wordlists/SecLists/Usernames/Names/names.txt \
-X POST -d "username=FUZZ&email=x&password=x&cpassword=x" \
-H "Content-Type: application/x-www-form-urlencoded" \
-u http://10.10.80.107/customers/signup -mr "username already exists"
\`\`\`

### Password Bruteforce
Bruteforce passwords for specific users by combining wordlists for usernames and passwords:

\`\`\`bash
ffuf -w valid_usernames.txt:W1,\
/usr/share/wordlists/seclists/Passwords/Common-Credentials/10-million-password-list-top-100.txt:W2 \
-X POST \
-d "username=W1&password=W2" \
-H "Content-Type: application/x-www-form-urlencoded" \
-u http://10.10.80.107/customers/login -fc 200
\`\`\`

## Pivoting
Pivoting is the process of leveraging a compromised system to attack other systems within the same network. It's a critical skill for deeper exploitation in CTFs.

## Windows Active Directory
If your target is a domain controller, you can use tools like LDAP and SMB to gather valuable information.

### LDAP
LDAP can be used to search for information in Active Directory:

\`\`\`bash
ldapsearch -x -H ldap://$target_hostname -b $domain_component
\`\`\`
Note: This requires valid credentials to access the directory in many cases.

### SMB
List SMB shares and access resources:
\`\`\`bash
smbclient -N -L //$target_hostname  # List shares with no authentication

# Login with credentials
smbclient -U login%password -L //10.10.11.42

# Access SMB share
smbclient -U 'login%password' //10.10.11.35/share
\`\`\`

enum4linux: A tool designed for gathering information from Windows and Samba (SMB) systems. You can use it to enumerate users too:
\`\`\`bash
enum4linux -a -u 'username' -p 'password' 10.10.10.10
\`\`\`

### Kerbrute
Duplicate and save a list of usernames to spray at the KDC:

\`\`\`bash
cat /usr/share/wordlists/seclists/Usernames/xato-net-10-million-usernames.txt | tr '[:upper:]' '[:lower:]' | sort -u > kerberos_users.txt
\`\`\`

Use Kerbrute to enumerate valid usernames:

\`\`\`bash
kerbrute userenum -d domain.tld --dc dc-ip-here -t 100 -o kerbrute.log ./kerberos_users.txt
\`\`\`

### crackmapexec
Crackmapexec is a powerful tool for SMB enumeration:

\`\`\`bash
# Enumerate users in the domain
crackmapexec smb 10.10.10.10 -d domain.local -u 'guest' -p '' --users

# Use RID brute-forcing to enumerate accounts
crackmapexec smb 10.10.10.10 -d domain.local -u 'guest' -p '' --rid-brute
\`\`\`

You can also use crackmapexec to perform password spraying:

\`\`\`bash
crackmapexec smb 10.10.10.10 -d 'domain.local' -u 'user' -p 'password'
\`\`\`

---

## Conclusion

This methodology is just a starting point, and each CTF challenge will present its unique set of problems and solutions. Stay curious, and keep experimenting with new tools and techniques to sharpen your skills!
`;

const scrollbarStyle = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const CopyButton = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute right-2 top-2 p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
      aria-label="Copy code"
    >
      {copied ? (
        <Check className="w-4 h-4 text-green-400" />
      ) : (
        <Copy className="w-4 h-4 text-gray-400" />
      )}
    </button>
  );
};

const TableOfContents = ({ headings, onHeadingClick }) => {
    const [activeSection, setActiveSection] = useState('');
    const tocRef = useRef(null);

    useEffect(() => {
        const observerCallback = (entries) => {
        const visibleSection = entries.find(entry => entry.isIntersecting);
        if (visibleSection) {
            setActiveSection(visibleSection.target.id);
            
            // Scroll the ToC to keep the active item visible
            const activeElement = tocRef.current?.querySelector(`[data-heading="${visibleSection.target.id}"]`);
            if (activeElement) {
            const containerHeight = tocRef.current.clientHeight;
            const elementTop = activeElement.offsetTop;
            const elementHeight = activeElement.clientHeight;
            const scrollTop = tocRef.current.scrollTop;
            
            // Check if element is outside visible area
            if (elementTop < scrollTop || elementTop + elementHeight > scrollTop + containerHeight) {
                tocRef.current.scrollTo({
                top: elementTop - containerHeight / 2 + elementHeight / 2,
                behavior: 'smooth'
                });
            }
            }
        }
        };

        const observer = new IntersectionObserver(observerCallback, {
        rootMargin: '-20% 0px -35% 0px',
        threshold: 0.4
        });

        headings.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [headings]);

    return (
        <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed right-4 top-[12.5rem] w-[350px] xl:w-[400px] hidden xl:block"
        >
        <div className="p-4 bg-gray-900/50 backdrop-blur-sm border border-red-500/20 rounded-xl shadow-lg">
            <h3 className="text-base font-bold mb-3 text-red-400 border-b border-red-500/20 pb-2">On this page</h3>
            <nav 
            ref={tocRef}
            className="custom-scrollbar overflow-y-auto max-h-[calc(100vh-20rem)] pr-2"
            >
            {headings.map((heading, index) => (
                <motion.button
                key={index}
                data-heading={heading.id}
                onClick={() => onHeadingClick(heading.id)}
                className={`block text-left w-full transition-colors duration-200 py-1.5 px-2 rounded
                    ${heading.level === 2 ? 'mt-1' : 'mt-0.5'} 
                    ${activeSection === heading.id 
                    ? 'text-red-400 font-medium bg-red-500/10' 
                    : 'text-gray-400/80 hover:text-gray-300 hover:bg-white/5'
                    }`}
                style={{ 
                    fontSize: heading.level === 2 ? '0.875rem' : '0.8rem',
                    marginLeft: `${(heading.level - 2) * 0.75}rem`,
                    lineHeight: '1.4',
                    paddingLeft: heading.level === 3 ? '1.25rem' : '0.5rem',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word'
                }}
                whileHover={{ x: 2 }}
                >
                {heading.text}
                </motion.button>
            ))}
            </nav>
        </div>
        </motion.div>
    );
};  

const MethodologyPage = () => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const extractHeadings = () => {
      const headingRegex = /^(#{2,3})\s+(.+?)(?=\n|$)/gm;
      const matches = [...methodologyContent.matchAll(headingRegex)];
      return matches.map((match) => ({
        level: match[1].length,
        text: match[2],
        id: match[2]
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
          .trim()
      }));
    };

    setHeadings(extractHeadings());
  }, []);

  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style jsx global>
        {scrollbarStyle}
      </style>
      <div className="min-h-screen p-6 sm:p-8">
        <motion.div
          className="w-full max-w-5xl mx-auto xl:pr-[300px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.button
            onClick={() => window.history.back()}
            className="inline-flex items-center text-gray-400 hover:text-red-400 transition-colors duration-300 mb-8 text-sm font-medium"
            whileHover={{ x: -5 }}
          >
            <svg 
              className="w-4 h-4 mr-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 19l-7-7m0 0l7-7m-7 7h18" 
              />
            </svg>
            Back to writeups
          </motion.button>

          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl sm:text-7xl font-extrabold mb-6 leading-tight animate-moving-gradient bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-400 to-red-600">
              CTF Methodology
            </h1>
            <hr className="border-t-2 border-gray-700 mb-8" />
          </motion.div>

          <motion.div 
            className="prose prose-invert prose-red max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Markdown
              components={{
                h2: ({ children }) => {
                  const id = children.toString().toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
                  return (
                    <h2 
                      id={id} 
                      className="text-3xl font-bold text-red-400 mt-8 mb-4"
                    >
                      {children}
                    </h2>
                  );
                },
                h3: ({ children }) => {
                  const id = children.toString().toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
                  return (
                    <h3 
                      id={id} 
                      className="text-2xl font-semibold text-gray-200 mt-6 mb-3"
                    >
                      {children}
                    </h3>
                  );
                },
                ul: ({ children }) => (
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside space-y-2 text-gray-300">
                    {children}
                  </ol>
                ),
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <div className="relative group">
                      <SyntaxHighlighter
                        style={dracula}
                        language={match[1]}
                        PreTag="div"
                        className="rounded-lg custom-scrollbar !bg-gray-900/50 !mt-0"
                        customStyle={{
                          padding: '1.5rem 1rem',
                          fontSize: '0.9rem',
                          lineHeight: '1.5',
                          background: 'rgba(17, 24, 39, 0.5)',
                          maxHeight: '400px',
                          overflow: 'auto'
                        }}
                        {...props}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                      <CopyButton code={String(children)} />
                      <div className="absolute top-0 right-0 px-2 py-1 text-xs text-gray-400 bg-gray-800/50 rounded-bl rounded-tr-lg">
                        {match[1]}
                      </div>
                    </div>
                  ) : (
                    <code className="bg-gray-800 px-2 py-1 rounded text-red-400" {...props}>
                      {children}
                    </code>
                  );
                }
              }}
            >
              {methodologyContent}
            </Markdown>
          </motion.div>
        </motion.div>

        <TableOfContents 
          headings={headings} 
          onHeadingClick={scrollToHeading}
        />
      </div>
    </>
  );
};

export default MethodologyPage;