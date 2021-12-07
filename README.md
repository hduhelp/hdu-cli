# hdu-cli

## Installation Or Upgrade

```shell
go install github.com/hduhelp/hdu-cli@latest
```

<details>
<summary>Trouble shoot</summary>

> The Command may need root privilege
>
> and sometimes go env is not install completely on your root account
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


