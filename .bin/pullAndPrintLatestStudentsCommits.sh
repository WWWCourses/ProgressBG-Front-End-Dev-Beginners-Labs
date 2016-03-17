walk_dir() {
	path_name=$1

    for entry in "$path_name"/*; do
        if [ -d "$entry" ]; then
			# if $path_name contains '.git' entry => $path_name is a repo folder
			if [[ $entry =~ .git$ ]]; then
				pullGitRepo "$path_name"
				printLatestCommitMsg "$path_name"
				# echo -e '\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'
				printf "\n"
			else
				walk_dir "$entry"
			fi
        fi
    done
}

pullGitRepo(){
	cd "$1"
	remote_name=`git config --get remote.origin.url`
	# echo -e "\n$remote_name"
	git fetch > /dev/null 2>&1
	git pull > /dev/null 2>&1
}

printLatestCommitMsg(){
	# get repo and parent repo folders from path
	repo="$(basename $1)";
	parent="$(basename $(dirname $1))"

	# set some colors
	red=$(tput setaf 1)
	yellow=$(tput setaf 3)
	blue=$(tput setaf 4)
	normal=$(tput sgr0)

	# set CWD
	cd "$1"

	# print empty line for each new parent
	if [[ "$parent_buf" != "$parent" ]];then
		echo -e ""
	fi
	parent_buf=$parent;

	# print author and date of latest commit
	# git --no-pager log -1 --pretty=format:'%Cgreen%an %Cred%ad %Creset%s' --date=format:'%Y-%m-%d' >&1
	git --no-pager log -1 --pretty=format:'%C(cyan)%an %C(magenta)%ad %Creset' --date=relative >&1

	# print repo folder
	printf " => $parent/$red$repo$normal"
}

script_path=$(dirname $(realpath $BASH_SOURCE[0]))
labs_dir=$(dirname "$script_path")
parent_buf=""

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ #
# MAIN
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ #
# set dotglob for * === all files, including dotfiles, but not "." and ".."
shopt -s dotglob
clear

if [ -e "$labs_dir/students" ]; then
	root_dir="$labs_dir/students"
	echo "Fetch and Pull student's repos..."
	walk_dir "$root_dir"
	echo ""
else
	echo "$labs_dir/students did not exists"
fi
