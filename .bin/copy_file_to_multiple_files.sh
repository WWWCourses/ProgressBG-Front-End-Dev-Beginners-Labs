dest_folder="./students"

declare -a students=(
	"Mihaela"
	"Zornitsa"
	"Veselin"
	"Kalina"
	"Velin"
	"Boris"
	"Mariela"
)

for i in "${students[@]}"
do
   	# echo "$dest_folder/$i/$1"
	if [ ! -d "$dest_folder/$i" ];then
		mkdir -p "$dest_folder/$i"
	fi
	tee <$1 $dest_folder/$i/$1 >/dev/null
done
















