deploy:
	cp -rf build/* .
	git add static/ index.html favicon.ico asset-manifest.json
	git commit -m "Deploy build"
