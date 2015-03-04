require 'rails_helper'

describe 'login', js: true do

  hello_kitty = { email: 'hello_kitty@sanrio.com', password: 'cat123' }

  it 'a user can login' do
    login_user(hello_kitty)
    expect(page).to have_content('Logout')
  end

end

def login_user(user)
  visit '/'
  fill_in('Email', with: user[:email])
  fill_in('Password', with: user[:password])
  click_button 'Login'
end