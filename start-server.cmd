@echo off

set PATH=^
%USERPROFILE%\Downloads\staticserver-v2.0.0-windows-latest;

staticserver --root=%~dp0
pause