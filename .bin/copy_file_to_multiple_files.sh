dest_file="../students/Kalin/$1"

echo "copying $1 to $dest_file"
tee <$1 $dest_file >/dev/null