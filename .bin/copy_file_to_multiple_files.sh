# ensure CWD folder is not 'Labs',
if [[ "$(basename $PWD)" == "Labs" ]]; then
	echo "I will not work in $PWD !"
	exit 0
fi

# ensure a file to be copied is given and exists
if [ ! $1 ];then
	echo "Give me a file name to copy!"
	exit 0;
else
	input_file_path=$(realpath $1)

	if [ ! -f $input_file_path ];then
		echo "File: '$input_file_path' does not exits!"
		exit 0
	fi
fi

script_path=$(dirname $(realpath $BASH_SOURCE[0]))
labs_path=$(dirname $script_path)
config_path=${labs_path}/students/config
studentNamesFilePath="$config_path/studentNames.config"

dest_folder="${PWD}/students"

input_file_name=$(basename $input_file_path)


# get studentNames array from config file
readarray -t studentNames < ${studentNamesFilePath}
# printf '%s\n' "${studentNames[@]}"

for i in "${studentNames[@]}"
do
   	# echo "$dest_folder/$i/"
	if [ ! -d "$dest_folder/$i" ];then
		mkdir -p "$dest_folder/$i"
	fi
	tee <$input_file_path $dest_folder/$i/$input_file_name >/dev/null
done

echo "File '$input_file_name' copied to each folder in '$dest_folder'"

















