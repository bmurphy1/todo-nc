env:
	npm install
	bundle install

clean:
	rm -rf node_modules
	rm -rf Gemfile.lock

run: env
	node server.js

tests: env
	open test/SpecRunner.html
	rspec