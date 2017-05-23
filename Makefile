
default: deploy

# Deploy the build so that Github pages can serve the files.
.PHONY: deploy
deploy:
	cp -rf build/* .
	git add static/ index.html favicon.ico asset-manifest.json
	git commit -m "Deploy build"

# Removes the files produced by the deploy target.
.PHONY: clean
clean:
	rm -rf static/ index.html favicon.ico asset-manifest.json
