# Testing Concepts

* [Object-Oriented Concepts](#oo-concepts)
* [Test Terminology](#test-terminology)
* [Testing Approaches](#approaches)
* [Types of Test](#types-of-test)
* [Types of Test Double](#types-of-test-double)

## Object-Oriented Concepts

* **Behavior**: the messages sent by an object-oriented program. Behavior verification involves checking what messages were sent by a program, not the results of those messages in terms of data stored.
* **Collaborator**: an object that works with another object to accomplish its goals.
* **Dependency**: knowledge that an object has about another object. An object must have some dependencies on its [collaborators](#collaborator), but it’s possible for an object to have more dependencies on other objects that necessary.
* **Refactor**: improving the design of a piece of code through small transformations without changing its behavior.
* **State**: the data constructs in a program. State verification involves checking the results of operations in terms of data, not checking that the operations themselves happened.

## Test Terminology

* **Assertion**: a check within a test that ensures a given condition is true, and report an error message if not.
* **Example**: the “spec”-style equivalent of a [test case](#test-case). An example writes out something a piece of code should do, and can be run to determine whether the system actually does it.
* **Expectation**: the “spec”-style testing equivalent of an [assertion](#assertion). Indicates that a certain condition is expected to be true. When the spec is run, if the condition is not true, an error will be shown.
* **Red-Green-Refactor**: a cycle of steps followed in TDD. First, a failing test is written and run to confirm that it fails (“red”). Then, production code is written to make the test pass (“green”). Finally, as necessary, the test and production code are [refactored](#refactor) to improve their design, while the test is repeatedly run to make sure it is still green.
* **Regression**: the reintroduction of an error in code that was previously working correctly. One of the main goals of testing is to catch regressions.
* **Specification (Spec)**: a test, considered primarily as a way to indicate the desired [behavior](#behavior) of a system, rather than to confirm the behavior of an existing system. Used in [Mockist TDD](#mockist-tdd).
* **Subject**: the object being tested in a given context.
* **Test Case**: the smallest unit of a test suite that can be run on its own.
* **Test Double**: an object that stands in for a production object during testing. Includes [dummies](#dummy), [fakes](#fake), [mocks](#mock), [spies](#spy), and [stubs](#stub).
* **Test Suite**: a collection of test cases.

## Testing Approaches

* **Behavior-Driven Development (BDD)**: an approach to software development that involves working with the user to specify the behavior of a system and build it in terms of those specifications. BDD is closely related to [Mockist TDD](#mockist-tdd), but whereas Mockist TDD usually begins with features already defined, BDD includes the process of coming up with the features list.
* **Classical TDD**: the original form of TDD proposed by Kent Beck. It focused on [middle-out testing](#middle-out-testing), [unit tests](#unit-test) against real [collaborators](#collaborator), [stubbing](#stub), verifying [state](#state), and “[test case](#test-case)” and “[assertion](#assertion)” terminology.
* **Middle-Out Testing**: an approach to testing that begins with domain objects and works from there out to user-facing code.
* **Mockist TDD**: a refinement of [classical TDD](#classical-tdd) proposed by the London TDD community. Mockist TDD focuses on [mock objects](#mock), [behavior](#behavior) verification, [outside-in testing](#outside-in-testing), and [isolation testing](#isolation-testing).
* **Outside-in Testing**: an approach to testing that begins with the outside of the system, i.e. with [acceptance tests](#acceptance-test), and then writes [isolation tests](#isolation-test) as needed to specify classes needed to satisfy the acceptance test.

## Types of Test

* **Acceptance Test**: a test that confirms that the system correctly implements a user-visible feature. Often accomplished with [end-to-end testing](#end-to-end-test).
* **Characterization Test**: tests written against a pre-existing system to document its current behavior, bugs and all. Includes both first-party and third-party code. Similar to [exploratory tests](#exploratory-test), but tends to be more comprehensive and permanent.
* **End-to-End Test**: a test that accesses the entire system from the outside, e.g. through the user interface or HTTP requests. Often used to accomplish [acceptance testing](#acceptance-test).
* **Exploratory Test**: tests written against a pre-existing system to understand its current behavior. Includes both first-party and third-party code. Similar to [characterization tests](#characterization-test), but tends to be less comprehensive and more disposable.
* **Functional Test**: a test of a controller in an MVC application.
* **Integration Test**: multiple usages:
  * Aby test that exercises more than one production class; the opposite of an [isolation test](#isolation-test).
  * A test that checks that the application’s code works correctly with third-party code.
* **Isolation Test**: a test that exercises only one production class. Any [dependencies](#dependency) of that class are replaced by [test doubles](#test-double).
* **Request Test**: a test of a request sent into a system, such as an HTTP request to a server-rendered web application or a web service.
* **Unit Test**: multiple usages:
  * A test that exercises only one production class; equivalent to “[isolation test](#isolation-test).” This is the definition used in [Mockist TDD](#mockist-tdd).
  * A test of a class and all its real [collaborators](#collaborator). Called a “unit” test because it can be run in isolation without affecting or being affected by any other tests. This is the definition used in [Classical TDD](#classical-tdd).

## Types of Test Double

* **Dummy**: a [test double](#test-double) that is not actually used for anything other than to fill in an argument list.
* **Fake**: a [test double](#test-double) that has real behavior implemented in a simple way. For example, a fake equivalent of a database connection might store data in-memory.
* **Mock**: a [test double](#test-double) that allows specifying in advance the messages it must receive, which are then verified at the end of a test case. Mocks and [spies](#spy) are the primary methods of [behavior](#behavior) verification.
* **Spy**: a [test double](#test-double) that records messages it receives, which can then be tested against at the end of a test case. Spies and [mocks](#mock) are the primary methods of [behavior verification](#behavior).
* **Stub**: a [test double](#test-double) with hard-coded method responses.

---

## References

* [_Growing Object-Oriented Software, Guided by Tests_](https://web.archive.org/web/20190424203944/http://www.informit.com/store/growing-object-oriented-software-guided-by-tests-9780321503626)
* [“Introducing BDD”](https://web.archive.org/web/20190424203944/https://dannorth.net/introducing-bdd/), DanNorth.net
* [“Mocks Aren’t Stubs”](https://web.archive.org/web/20190424203944/http://martinfowler.com/articles/mocksArentStubs.html), MartinFowler.com
* [_Practical Object-Oriented Design in Ruby_](https://web.archive.org/web/20190424203944/http://www.poodr.com/)
* [“Test Doubles”](https://web.archive.org/web/20190424203944/http://www.martinfowler.com/bliki/TestDouble.html), MartinFowler.com
* [_Test-Driven Development by Example_](https://web.archive.org/web/20190424203944/https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530)

---

[This file generated from the Archive.org copy of the original LearnTDD Page](https://web.archive.org/web/20190424203944/https://learntdd.in/concepts)