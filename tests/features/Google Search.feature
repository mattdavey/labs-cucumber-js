Feature: : Searching Google
  Scenario: Searching for 'sqlapi'
    When I navigate to "http://google.com"
    And I type "sqlapi" into the search field
    And I submit my search
    Then "sqlapi.com" is at the top of the search results

