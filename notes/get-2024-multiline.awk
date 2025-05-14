BEGIN {
    RS = "\n\n"; # Record Separator: 줄바꿈 문자 2개
    FS = "\n" # Field Separator: 줄바꿈 문자 1개
}
{
    if ( $3 ~ /^2024/ && $2 == "국어국문학과" ) { 
        print $0
    }
}