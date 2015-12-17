#!/bin/bash

echo "Input your project name (EX: RNBoilerplate), followed by [ENTER]:"
read project

array=( package.json src test android ios )

for i in "${array[@]}"
do
  replace 'RNBoilerplate' $project $i -r ;
  lc=$(echo "$project" | tr '[:upper:]' '[:lower:]') ;
  replace 'rnboilerplate' $lc $i ;
done