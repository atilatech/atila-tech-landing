#!/usr/bin/env bash


deploy () {
 git add . ;
 git commit -m "$1" ;
 git push ;
 ng build --prod;

 aws s3 sync dist/ s3://tech.atila.ca;
 aws cloudfront create-invalidation --distribution-id EZ8XIMBLMQKJN --paths "/*";
}

just_deploy() {
 ng build --prod;

 aws s3 sync dist/ s3://tech.atila.ca;
 aws cloudfront create-invalidation --distribution-id EZ8XIMBLMQKJN --paths "/*";
}

deploy_alternate () {
 git add . ;
 git commit -m "$1" ;
 git push ;

 aws s3 cp home_alternate s3://tech.atila.ca/ --recursive --exclude ".gitignore" --exclude "README.txt";
 aws cloudfront create-invalidation --distribution-id EZ8XIMBLMQKJN --paths "/*";
}
