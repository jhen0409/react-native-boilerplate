#!/bin/bash

echo "Input your project name (like RNBoilerplate), followed by [ENTER]:"
read project

array=( package.json src test android ios )

for i in "${array[@]}"
do
  # lowercase
  lc=$(echo "$project" | tr '[:upper:]' '[:lower:]') ;
  # file content
  replace 'RNBoilerplate' $project $i -r ;
  replace 'rnboilerplate' $lc $i -r ;
done

mv ios/RNBoilerplate ios/$project
mv ios/RNBoilerplate.xcodeproj ios/"$project".xcodeproj
mv ios/RNBoilerplateTests/RNBoilerplateTests.m ios/RNBoilerplateTests/"$project"Tests.m
mv ios/RNBoilerplateTests ios/"$project"Tests
mv android/app/src/main/java/com/rnboilerplate android/app/src/main/java/com/$project
