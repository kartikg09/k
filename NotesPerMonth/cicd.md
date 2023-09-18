ci/cd
a method to frequently deliver apps to customer by introducing automation into the stages of app development.
attributes - continuous integration, continuous delivery, and continuous deployment.
purpose - integrating new code can cause for development and operation teams.
ongoing automation and continuous monitoring throughout the lifecycle of apps.

CI - It is a development practice that requires developers to integrate code into a shared repository several times a day. Each check-in is then verified by an automated build, allowing teams to detect problems early.
Helps in teams of developers as each are working on their seperate and ci is automatically doing the verification and integration of code.
How to practice CI?
1. Developers check out code from the repository to work on it locally. Ideally, they create a new branch for the feature they want to implement.
2. When feature is ready, they run tests locally in their development enviroments.
3. Once all tests pass, they push the commits to the singlle source repository.
4. Whenever there are changes on the repository, a CI server check out the changes and performs a "build and test". A build and test is when the CI server builds the entire system on the developer's feature branch and runs all the unit and integration tests.
5. Outcomes - failed build, successful build, failed tests, successful tests.
6. Failure - fixes the issue
7. Then the feature branch is merged to main branch and then repeat steps 2-6.
8. They continue to develop and repeat the steps 2-6 whenever there's new code to be checked in to the repository.

Major principals of CI:
1. Check in (verifying and integrating the code) code in frequently.
2. Automate the build and test portion.
3. Always test the code locally before checking it in.
4. Never merge any failed branches to the main branch.
5. Return its status back to successful if you're the developer who causes the failed build or test.
6. Make it your top priority to do so once the fail happens.

Continuous Deployment - It is closely related to CI (Continuous Integration) and refers to the release into production of software that passes the automated test.
Deploying manually for each release as it is a good practice of releasing every good build to users.

Continuous Delivery - Ensuring that every good build is potentially ready for production release. It's sent to the user acceptance test (UAT) environment. After which business team can decide to release it in production at the push of a button.

continuous deployment
CI server builds and tests successfully -> Automatically delivers to UAT -> -> Automatically deploy to productions as official relelase.

continuous delivery
CI server builds and tests successfully -> Automatically delivers to UAT -> Business push a button manually to trigger a deployment -> Automatically deploy to productions as official relelase.

CI/CD pipeline
Commit Changes -> Trigger build -> Build -> Notify of Build Outcome -> Run Tests -> Notify of tests outcomes -> Delivered build to environment -> Deploy where necessary

References:
https://dev.to/wardaliaqat01/getting-intimate-with-cicd-and-cicd-pipeline-5f8
https://dev.to/itsahsanmangal/building-a-robust-cicd-pipeline-with-docker-a-comprehensive-guide-4k8b