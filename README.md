# hdu-cli

## Installation Or Upgrade

```shell
go install github.com/hduhelp/hdu-cli@latest
```

or direct download the release file which suffix match your platform.

## Startup

use command like

```
hdu-cli net login --username {Your student number} --password {Your HDU Cas Password} --save
```

or manually use the .hdu-cli.yaml and fill according the comments

<details>
<summary>Trouble shoot</summary>

> The Command may need root privilege
>
> and sometimes go env is not install completely on your root account (sudo mode)
>
> so try like `sudo $GOROOT/bin/go install github.com/hduhelp/hdu-cli@latest`
> 
> By the way, if you follow the offical installation guide of GO, The goroot will be like /usr/local/go/
</details>

## Usage

### hdu-cli [sub command]

### Available Sub Commands:

- completion  
  - generate the autocompletion script for the specified shell
- help        
  - Help about any command
- net         
  - i-hdu network auth cli

### Flags:

- --config string   
  - config file (default is $HOME/.hdu-cli.yaml)
  - more detail see comments at [hdu-cli.yaml example](./.hdu-cli.yaml)
- -h, --help            
  - help for hdu_cli
- -s, --save            
  - save config
- -V, --verbose         
  - show more info
- -v, --version         
  - version for hdu_cli


Use `hdu_cli [sub command] --help` for more information about a command.


