script_path=$(dirname $(realpath $BASH_SOURCE[0]))
labs_path=$(dirname $script_path)
config_path=${labs_path}/.students/config
# printf '%s\n' $(ls $config_path)


githubAcountsURLsFilePath="$config_path/githubAcountsURLs.config"
if [ ! -f $githubAcountsURLsFilePath ];then
	echo "$githubAcountsURLsFilePath does not exist. Exit!"
	exit 0
fi


githubAcountsURLs=$(tr '\n' ' ' < ${githubAcountsURLsFilePath})
# echo $githubAcountsURLs

google-chrome --new-window $githubAcountsURLs