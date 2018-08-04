#!/usr/bin/env bash


deploy () {
 git add . ;
 git commit -m "$1" ;
 git push ;
 ng build --prod;

 aws s3 sync dist/ s3://tech.atila.ca
}
