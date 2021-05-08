# CLI Tool

This is CLI tool for encoding and decoding text using [Ceasar Cipher](https://en.wikipedia.org/wiki/Caesar_cipher).

CLI tool could accept **4 options** (short alias and full name):

-s, --shift: a shift - 7 **(MANDATORY)**

-a, --action: an action - "encode" / "decode" **(MANDATORY)**

-i, --input: an input file - "./path/to/file.txt"

-o, --output: an output file - "./path/to/file.txt"

## Instalation

```
npm i
```

## Usage example:

```
$ node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
```

```
node my_caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt
```

```
node my_caesar_cli --action decode --shift 7 --input encoded.txt --output plain.txt
```

```
node my_caesar_cli --action encode --shift -1 --input plain.txt --output encoded.txt
```
