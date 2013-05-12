REPORTER = spec

test:
	@time ./node_modules/.bin/mocha --ui tdd --reporter $(REPORTER) $(T) $(TESTS)

.PHONY: test
