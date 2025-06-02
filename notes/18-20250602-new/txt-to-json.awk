BEGIN {
    FS = " "
    print "{"
    count = 0
}
{
    labels[count] = $2
    data[count] = $1
    count++
}
END {
    print "    \"labels\": ["
    for (i = 0; i < count; i++) {
        printf "        \"" labels[i] "\"" # 따옴표로 둘러싸기
        if (i < count-1) printf "," # 마지막 직전까지 쉼표
        print "" # 줄바꿈
    }
    print "    ],"

    print "    \"datasets\": ["
    print "        {"
    print "            \"label\": \"Frequency\","
    print "            \"data\": ["
    for (i = 0; i < count; i++) {
        printf "                " data[i]
        if (i < count-1) printf ","
        print ""
    }
    print "            ]"
    print "        }"
    print "    ]"
    print "}"
}