all:
	echo "not doing anything for now"

commitdoc:	htmldoc
	echo "assume committing docs"
	#cd ../are-doc/
	git --git-dir=../are-doc/.git --work-tree=../are-doc commit -a -m"Autocommit wiki_html"
	git --git-dir=../are-doc/.git --work-tree=../are-doc push || true
	cd ../are-relationship-engine

htmldoc: doc/*.wiki
	vim doc/index.wiki -c"cd %:p:h" -c "VimwikiAll2HTML" -c "qa"
	cp -a doc_html ../are-doc

