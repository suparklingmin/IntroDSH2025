BEGIN { FS = "," }
{
    if ( $3 ~ /^2024/ && $2 == "국어국문학과" ) { 
        print $0
    }
}