wget https://www.gutenberg.org/cache/epub/29728/pg29728.txt -O apicius.txt

egrep -o "[A-Z][A-Z]+" apicius.txt | sort | uniq -c | sort -rn > word-count.txt

head -30 word-count.txt | awk -f txt-to-json.awk > data.json
