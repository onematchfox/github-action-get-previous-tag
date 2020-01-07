const { exec } = require('child_process');
exec('git describe --tags `git rev-list --tags --max-count=1`', (err, tag, stderr) => {
    if (err) {
        console.log('\x1b[33m%s\x1b[0m', 'Could not find any tags because: ');
        console.log('\x1b[31m%s\x1b[0m', stderr);
        process.exit(1);

        return;
    }

    console.log('\x1b[32m%s\x1b[0m', `Found tag: ${tag}`);

    if (tag.startsWith("v"))
    {
        tag = tag.substr(1, tag.length - 1);
    }

    console.log(`::set-output name=tag::${tag}`);
    console.log(`::set-output name=v_tag::v${tag}`);

    process.exit(0);
});
