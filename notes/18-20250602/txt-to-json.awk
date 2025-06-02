BEGIN {
    FS = " "

    # data size
    count = 0

    # begin of json
    print "{"
}
{
    freqs[count] = $1
    words[count] = $2
    count++
}
END {
    # labels
    print "    \"labels\": ["
    for (i = 0; i < count; i++) {
        printf "        \"" words[i] "\""
        if (i < count-1) printf ","
        print ""
    }
    print "    ],"

    # beginning of datasets
    print "    \"datasets\": ["

    # each dataset
    print "        {"
    print "            \"label\": \"Frequency\","
    print "            \"data\": ["
    for (i = 0; i < count; i++) {
        printf "                " freqs[i]
        if (i < count-1) printf ","
        print ""
    }
    print "            ]"
    print "        }"

    # end of datasets
    print "    ]"

    # end of json
    print "}"
}