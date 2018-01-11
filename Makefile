install: install-deps #install-flow-typed

install-deps:
		npm install

start:
	# npm run babel-node -- src/bin/gendiff.js __tests__/__fixtures__/before.json __tests__/__fixtures__/after.json
	npm run babel-node -- src/bin/gendiff.js __tests__/__fixtures__/before.ini __tests__/__fixtures__/after.ini

build:
		rm -rf dist
		npm run build

test:
		npm test

check-types:
		npm run flow

lint:
		npm run eslint .

publish:
		npm publish

.PHONY: test

startTest:
	npm run babel-node -- src/bin/gendiff.js
	#npm run babel-node -- /home/alex/prj/start.js
