Feature: Test Asana website

  Scenario: Test Case 1
    Given Login to Demo App.
    When Navigate to "Web Application"
    Then Verify "Implement user authentication" is in the "To Do" column.
    And Confirm tags: "Feature" "High Priority"

  Scenario: Test Case 2
    Given Login to Demo App.
    When Navigate to "Web Application"
    Then Verify "Fix navigation bug" is in the "To Do" column.
    And Confirm tags: "Bug"

  Scenario: Test Case 3
    Given Login to Demo App.
    When Navigate to "Web Application"
    Then Verify "Design system updates" is in the "In Progress" column.
    And Confirm tags: "Design"

  Scenario: Test Case 4
    Given Login to Demo App.
    When Navigate to "Mobile Application"
    Then Verify "Push notification system" is in the "To Do" column.
    And Confirm tags: "Feature"

  Scenario: Test Case 5
    Given Login to Demo App.
    When Navigate to "Mobile Application"
    Then Verify "Offline mode" is in the "In Progress" column.
    And Confirm tags: "Feature" & "High Priority"

  Scenario: Test Case 6
    Given Login to Demo App.
    When Navigate to "Mobile Application"
    Then Verify "App icon design" is in the "Done" column.
    And Confirm tags: "Design"
