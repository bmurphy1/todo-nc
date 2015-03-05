Capybara.default_driver = :selenium
describe 'login', type: :feature, js: true do

  hello_kitty = { email: 'hello_kitty@sanrio.com', password: 'cat123' }

  it 'a user can login' do
    login_user(hello_kitty)
    expect(page).to have_content('Logout')
  end
end

