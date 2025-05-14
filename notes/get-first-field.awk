BEGIN{
    FS=","; # field separator
    OFS="#" # output field separator
}
{print $1, $3}
