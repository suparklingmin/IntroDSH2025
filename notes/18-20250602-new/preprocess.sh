wget https://www.gutenberg.org/cache/epub/29728/pg29728.txt -O apicius.txt

egrep -o "[A-Z][A-Z]+" apicius.txt | sort | uniq -c | sort -nr > word-freq.txt