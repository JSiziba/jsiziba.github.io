<script lang="ts" xmlns:svelte="http://www.w3.org/1999/html">

import { CodeBlock } from "@skeletonlabs/skeleton";
</script>

<svelte:head>
  <title>How I Used Certbot to Get a Free SSL Certificate</title>
</svelte:head>


<article class="flex gap-10 flex-col">
  <h1 class="h1">How I Used Certbot to Get a Free SSL Certificate</h1>

  <section>
    <p>SSL certificates are essential for securing web applications and ensuring that the data exchanged between the server and the client is encrypted and authenticated. However, obtaining and renewing SSL certificates can be costly and time-consuming, especially for small projects or personal websites. That’s why I decided to use Certbot, a free and open-source tool that automates the process of obtaining and renewing SSL certificates from Let’s Encrypt, a non-profit certificate authority that provides free SSL certificates for anyone who owns a domain name.</p>
    <p>In this article, I will share with you how I used Certbot to get a free SSL certificate for my Spring Boot web application, and how I configured it to work with my server. I will also show you how I solved some of the challenges that I faced along the way.</p>
  </section>

  <section>
    <h2 class="h2">Step 1: Install Certbot</h2>
    <p>The first step is to install Certbot on your server. The installation process might vary depending on your operating system. On Ubuntu, you can use the following commands:</p>
    <CodeBlock lineNumbers={true} class="" language="shell"
               code={`sudo apt-get update
sudo apt-get install certbot
`}
    ></CodeBlock>
    <p>You can check the official documentation of Certbot for other operating systems and installation methods.</p>
  </section>

  <section>
    <h2 class="h2">Step 2: Obtain the Certificate</h2>
    <p>The next step is to obtain the certificate from Let’s Encrypt using Certbot. There are different ways to do this, depending on how you want to verify your domain ownership and how you want to configure your web server. In my case, I chose to use the standalone mode, which means that Certbot will create a temporary web server on your machine and use it to perform the verification process. To use this mode, you need to run the following command:</p>
    <CodeBlock lineNumbers={true} class="" language="shell"
               code={`sudo certbot certonly --standalone`}
    ></CodeBlock>
    <p>This command will prompt you to provide some information, such as your email address and your domain name. You need to have a valid domain name that points to your server’s IP address. If you don’t have one, you can use a free dynamic DNS service, such as [No-IP], to create one. I used No-IP to create a subdomain for my server and updated the DNS records accordingly.</p>
    <p>After you provide the necessary information, Certbot will attempt to bind to port 80 on your server and complete the verification process. If everything goes well, you should see a message like this:</p>
    <img class="w-full" src="/images/Screenshot%202024-01-21%20105929.png" alt="" srcset="">
    <p>This means that you have successfully obtained a free SSL certificate for your domain, and it is valid for 90 days. You can also find the certificate and the private key files in the /etc/letsencrypt/live/your-domain directory. </p>
  </section>

  <section>
    <h2 class="h2">Step 3: Convert PEM to PKCS12</h2>
    <p>The certificate and the private key files that Certbot generates are in the PEM format, which is a text-based format that contains the base64-encoded data. However, Spring Boot requires the SSL certificate to be in the PKCS12 format, which is a binary format that can store multiple certificates and keys in a single file. Therefore, we need to convert the PEM files to a PKCS12 file using the openssl command. To do this, you need to go to the /etc/letsencrypt/live/your-domain directory and run the following command:</p>
    <CodeBlock lineNumbers={true} class="" language="shell"
               code={`openssl pkcs12 -export -in fullchain.pem -inkey privkey.pem -out springboot_letsencrypt.p12 -name bootalias -CAfile chain.pem -caname root`}
    ></CodeBlock>
    <p>This command will create a PKCS12 file named springboot_letsencrypt.p12 that contains the certificate, the private key, and the certificate chain. You also need to specify a name for the certificate alias (bootalias in this case) and a password for the file. You can choose any name and password you want, but you will need them later to configure your Spring Boot application.</p>
  </section>

  <section>
    <h2 class="h2">Step 4: Copy the PKCS12 File to Your Spring Boot Project</h2>
    <p>The next step is to copy the PKCS12 file that you created in the previous step to your Spring Boot project. You can use any method you prefer, such as scp, rsync, or ftp, to transfer the file from your server to your local machine. In my case, I used scp to copy the file to the src/main/resources/ssl directory of my Spring Boot project. You can create this directory if it doesn’t exist.</p>
  </section>

  <section>
    <h2 class="h2">Step 5: Configure Spring Boot to Use the SSL Certificate</h2>
    <p>The final step is to configure your Spring Boot application to use the SSL certificate that you obtained from Let’s Encrypt. To do this, you need to add some properties to your application.properties or application.yml file. Here are the properties that I added to my application.properties file:</p>
    <CodeBlock lineNumbers={true} class="" language="shell"
               code={`server.port=8443
server.http.port=8080
server.ssl.key-store=src/main/resources/ssl/springboot_letsencrypt.p12
server.ssl.key-store-password=password99
server.ssl.keyStoreType=PKCS12
server.ssl.keyAlias=bootalias
`}></CodeBlock>
    <p>These properties tell Spring Boot to use the PKCS12 file that we copied to the src/main/resources/ssl directory as the key store for the SSL certificate, and to use the password and the alias that we specified when we created the file. They also tell Spring Boot to run the application on port 8443, which is the default port for HTTPS, and to redirect any HTTP requests on port 8080 to HTTPS.</p>
    <p>You can also use YAML syntax if you prefer, or use environment variables or command-line arguments to override these properties. You can find more information about how to configure SSL in Spring Boot in the [official documentation].</p>
  </section>

</article>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>