# Oracle-Assignnment
CHALLLENGE 1 & 2

Docker remote REST api instruction 

0) Clone/Download Oracle-node 

1) Open terminal

2) Navigate (cd) to folder => Challenge 1 & 2/Oracle-node

3) install node modules first => npm install

3) Key in this command => docker build -t oracle-docker:2.0 .

4) run the docker by using this command => docker run -p 3000:3000 oracle-docker:2.0

5) use curl to run the remote REST api by using curl eg. => curl -d “elements:10” -X GET http://localhost:3000/fibonacci
