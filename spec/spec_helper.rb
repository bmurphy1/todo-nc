require 'rspec'
require 'capybara/rspec'
require 'selenium-webdriver'

# Login Helper
# param[user] - hash of user email and password
def login_user(user)
  visit 'http://localhost:9000'
  fill_in('Email', with: user[:email])
  fill_in('Password', with: user[:password])
  click_button "Login"
end