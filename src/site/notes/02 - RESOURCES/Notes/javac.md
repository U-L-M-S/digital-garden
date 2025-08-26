---
{"dg-publish":true,"permalink":"/02-resources/notes/javac/","tags":["code/java"],"noteIcon":"","updated":"2025-08-26T16:35:05.221+02:00"}
---

>[[02 - RESOURCES/Notes/Java\|Java]] [[02 - RESOURCES/Notes/Compiler\|Compiler]].
>>Es wird nicht so häufig verwendet (über den Terminal).
>>Es wird häufiger alles automatisiert über den [[02 - RESOURCES/Notes/IDE\|IDE]].

```bash
Usage: javac <options> <source files>

where <source files> are Java source files. Options include:

  -g             Generate all debugging information.
  -nowarn        Generate no warnings.
  -verbose       Output messages about what the compiler is doing.
  -deprecation   Output source locations where deprecated APIs are used.
  -classpath <path>   Specify where to find user class files and
                     annotation processors.
  -sourcepath <path>  Specify where to find input source files.
  -d <directory>  Specify where to place generated class files.
  -encoding <encoding>  Specify the character encoding of the source files.
  -target <release>  Generate class files for a specific VM version.
  -source <release>  Provide source compatibility with specified release.
  -Xlint[:<warnings>]  Enable specific warnings.
  -Xdoclint:<options>  Control the level of Javadoc doclint checking.
  -Xprintprocessor  Print generated source code from annotation processors.
  -Xmaxerrs <number>  Set the maximum number of errors to report.
  -Xmaxwarns <number>  Set the maximum number of warnings to report.
  -cp <path>      Synonym for -classpath.

For more options and details, refer to the Java documentation.
```