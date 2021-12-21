## Jesting (testing with jest)

- Testing is typically a big time commitment, *but it will make your life easier in the long run*
  - Especially when you're manually testing code (don't do this)
  - The way around this is using a test runner
    - [jest](https://jestjs.io/) (we'll be using jest in this demo)
    - [karma](https://karma-runner.github.io/latest/index.html)



## Functional testing
- This demo focuses functional testing
    - Basically, testing the code that is written if it’s working properly
    - There are 3 types:
        1. Unit
            - Goal is to validate the behavior of a single unit of code
        2. Integration
            - Testing multiple units of code together
                - You can test them individually and have passing tests but that doesn’t really tell you if a component is able to use a hook/func
        3. E2E
            - Simulates user’s interactions on your app
            - [Cypress](https://www.cypress.io/)
- There are other types of testing such as:
    - Performance
    - Usability
    - Security
    - Stress
        - Testing your infra

## TDD (Test-driven development)

Describe the behavior of your code before you start writing it
  - Devs usually don’t write tests first. Typically, out of habit, or rapidly changing requirements
  - If your project has good acceptance criteria then TTD will help a lot

#### Benefits
- Catch bugs more quickly and proactively
  - No one wants to find out that their code is broken when it's in prod
- Ensure a stable code base as your project evolves
- Great way to improve your development skills
  - You will learn a lot about your code, and how it works behind the scenes 

#### General idea
- First you write a test
    - It fails
- Second, you write some code
    - It passes
- Refactor as needed

#### Test suite
  - Contains one or more tests
  - Test cases with `it` keyword
  - The idea is to describe tests so that they are human-readable
    - This goes back to having good acceptance criteria, which can be used to draft your initial tests
  - Expectations
      - If true, then test passes
      - If false, then test fails

<br />

## Useful info
- Acceptance testing
    - Checking if you’re hitting all the requirements from your client
- System testing
    - Does it work on actual servers/hardware/cloud
- Smoke/Sanity
    - As your app grows, these tests take a long time to run. Smoke tests contain the most important tests which check if your app is broken or not
- Functional testing
    - Unit
    - Integration
    - E2E
- Non-functional testings
    - Performance
    - Usability
    - Security
    - Stress testings
        - Infra


## References
- [cheat sheet](https://devhints.io/jest)
- [Software Testing Explained in 100 Seconds](https://www.youtube.com/watch?v=u6QfIXgjwGQ)
- [this repo](https://github.com/McK-Internal/MDS-tdd-demo)
