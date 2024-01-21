<script lang="ts" xmlns:svelte="http://www.w3.org/1999/html">

import { CodeBlock } from "@skeletonlabs/skeleton";
</script>

<svelte:head>
  <title>How to Configure Spring Boot App to Use Different .properties Files Depending on the Environment</title>
</svelte:head>


<article class="flex gap-10 flex-col">
  <h1 class="h1">How to Configure Spring Boot App to Use Different .properties Files Depending on the Environment</h1>

  <section>
    <p>Sometimes you might need to customize some settings based on the environment where your application is running, such as development, testing, staging, or production. For example, you might want to use different database credentials, logging levels, or port numbers for different environments.</p>
    <p>One way to achieve this is to use Spring Boot profiles, which allow you to define and activate different sets of configuration properties for different environments. In this article, I will show you how to use Spring Boot profiles to manage multiple .properties files for different environments, and how to switch between them easily.</p>
  </section>

  <section>
    <h2 class="h2">Step 1: Create Multiple .properties Files for Different Environments</h2>
    <p>The first step is to create multiple .properties files for different environments in your Spring Boot project. The .properties files are simple text files that contain key-value pairs of configuration properties, such as server.port=8080 or spring.datasource.url=jdbc:mysql://localhost:3306/mydb.</p>
    <p>The naming convention for the .properties files is application-{"{profile}"}.properties, where {"{profile}"} is the name of the environment, such as dev, test, prod, etc. You can choose any name you want, but it should be meaningful and consistent. For example, you can have the following files in your src/main/resources directory:</p>
    <ul class="mx-14 list-disc">
      <li>application.properties: This is the default file that contains the common properties for all environments. You can also use this file to specify the active profile for your application, as we will see later</li>
      <li>application-dev.properties: This file contains the properties for the development environment, such as server.port=8080 or spring.datasource.url=jdbc:h2:mem:testdb.</li>
      <li>application-test.properties: This file contains the properties for the testing environment, such as server.port=8081 or spring.datasource.url=jdbc:mysql://testdb:3306/mydb.</li>
      <li>application-prod.properties: This file contains the properties for the production environment, such as server.port=8082 or spring.datasource.url=jdbc:mysql://proddb:3306/mydb.</li>
      <p>You can add or modify any properties you want in these files, depending on your needs and preferences. However, you should not repeat the same properties in different files, unless you want to override them. Spring Boot will automatically load the properties from the default file and the profile-specific file, and give priority to the profile-specific file if there are any conflicts.</p>
    </ul>
  </section>

  <section>
    <h2 class="h2">Step 2: Activate the Profile for Your Application</h2>
    <p>The next step is to activate the profile for your application, which means to tell Spring Boot which .properties file to use for the current environment. There are different ways to do this, depending on how you run your application. Here are some of the common methods:</p>
    <ul class="mx-14 list-disc">
      <li>Use the spring.profiles.active property in the application.properties file. This is the simplest way to activate a profile, but it requires you to modify the file every time you want to switch the environment. For example, you can add the following line to your application.properties file to activate the dev profile:
        <br>
        <CodeBlock lineNumbers={true} class="" language="plaintext"
                   code={`spring.profiles.active=dev`}></CodeBlock>
      </li>
      <li>
        Use the --spring.profiles.active command-line argument when running your application. This is a more flexible way to activate a profile, as you can pass any profile name you want without changing the file. For example, you can run the following command to activate the test profile:
        <br>
        <CodeBlock lineNumbers={true} class="" language="shell"
                   code={`java -jar myapp.jar --spring.profiles.active=dev`}></CodeBlock>
      </li>
      <li>
        Use the SPRING_PROFILES_ACTIVE environment variable when running your application. This is another way to activate a profile, which is useful when you deploy your application to a cloud platform or a container. For example, you can set the following environment variable to activate the prod profile:
        <br>
        <CodeBlock lineNumbers={true} class="" language="shell"
                   code={`SPRING_PROFILES_ACTIVE=prod java -jar myapp.jar`}></CodeBlock>
      </li>
    </ul>
    <p>You can also use a combination of these methods, as Spring Boot will merge the profiles from different sources. However, the order of precedence is as follows: command-line arguments > environment variables > application.properties file. This means that the command-line arguments will override the environment variables, and the environment variables will override the application.properties file.</p>
  </section>

  <section>
    <h2 class="h2">Step 3: Use the Properties in Your Application</h2>
    <p>Once you have activated the profile for your application, you can use the properties in your application. For example, you can use the @Value annotation to inject the properties into your beans:</p>
  </section>

</article>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>