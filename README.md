# RAWG API TESTS

## Introduction

This is an automated regression test suite using PactumJs. These tests cover key functionality of the RAWG API.

## What these tests do

These tests cover:

error test: a negative test that tries to access the api without a vaild API key
success test: a test that tries to access the with a vaild API key
game test: a test that searches for a specific game
game series test: a test that searches for a game from a specific series, in this case Gran Turismo

This project uses the RAWG API you will need your own API key which you can get here <https://rawg.io/apidocs> add your API key in the .env file

## Install

npm install

## Run Tests

npm run test
