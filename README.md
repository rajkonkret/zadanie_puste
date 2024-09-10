# zadanie_puste
test clonne



Radosław Janiak
GitHub, GitLab, BitBucket

commit
squash
rebase
merge
pull request
push
pull
fetch
clone
checkout
branch
tag
stash
reset
revert
amend
blame
bisect

git config user.name "Jan Nowak"
git config user.email j.nowak@zxc.pl

git commit --amend --author=" "
git log  | git log --oneline

gałąź główna - master/slave -> main/
https://www.tabnine.com/

Rozszerzenia : GitHub Repositories, GitLens, GitGraph

git commit -a -m "commit message" // add and commit in one command
git commit -am "commit message" // add and commit in one command  
git commit -am "commit message" --no-verify // add and commit in one command and skip pre-commit hooks
git add - do zapamiętania / zatwierdzenie zmian
git commit -a // stage / schowek ??
git commit -a // dodanie zmian do schowka i zatwierdzenie (ale bierze wszystkie pliki, a git add bierze tylko te, które wyznaczymy)

git remote -v // sprawdzenie adresów zdalnych

git push origin main - wypchanie zmian na zdalne repozytorium
git push // wypchanie zmian na zdalne repozytorium na domyślne 
git push origin main --force - wypchanie zmian na zdalne repozytorium z nadpisaniem historii
git push origin main --force-with-lease - wypchanie zmian na zdalne repozytorium z nadpisaniem historii zabezpieczonym przed nadpisaniem cudzej pracy

git pull // pobranie zmian z zdalnego repozytorium
git pull origin main // pobranie zmian z zdalnego repozytorium
git pull origin main --rebase // pobranie zmian z zdalnego repozytorium z rebase
git pull origin main --no-rebase // pobranie zmian z zdalnego repozytorium bez rebase


git checkout -b branch_name // stworzenie nowej gałęzi i przejście na nią
git checkout branch_name // przejście na istniejącą gałąź
git checkout - // przejście na ostatnią gałąź
git checkout -b branch_name origin/branch_name // stworzenie nowej gałęzi i przejście na nią z gałęzi zdalnej
git checkout xyz // przejście na commit o numerze xyz (hash)

git branch // wyświetlenie listy gałęzi

git merge branch_name // zmergowanie gałęzi branch_name z aktualną gałęzią
git merge --abort // anulowanie merge
git merge --continue // kontynuacja merge

git reset --hard xyz // cofnięcie zmian do commita o numerze xyz (hash)

git push --force // wypchanie zmian na zdalne repozytorium z nadpisaniem historii // nie stosować w pracy zespołowej, tylko gdy ostatnia deska ratunku

git push tag tag_name // git wypchanie taga na zdalne repozytorium

tagi można opisać w dowolnym commit'cie:
    $ git tag v1.02 37b87b4
    $ git push --tags

git add main // dodanie pliku do schowka, przechowalni
git restore --staged main // usunięcie pliku z schowka

git tag -d tag_name // usunięcie taga
git show tag_name // wyświetlenie taga


git branch // wyświetlenie listy gałęzi
git branch -r // wyświetlenie listy gałęzi zdalnych
git branch -a // wyświetlenie listy wszystkich gałęzi
git branch -b branch_name // stworzenie nowej gałęzi

git branch -d branch_name // usunięcie gałęzi
git branch -D branch_name // usunięcie gałęzi z pominięciem zatwierdzenia zmian
git branch -m old_branch_name new_branch_name // zmiana nazwy gałęzi

git rebase -i HEAD~3 // interaktywny rebase ostatnich 3 commitów
git rebase -abort // anulowanie rebase
git rebas --continue // kontynuacja rebase

git add main // dodanie pliku do schowka, przechowalni
git restore --staged main // usunięcie pliku z schowka

git branch // wyświetlenie listy gałęzi

git rebase -i HEAD~3 // interaktywny rebase ostatnich 3 commitów
git rebase -abort // anulowanie rebase
git rebas --continue // kontynuacja rebase

git config --global core.editor "code --wait" // ustawienie edytora

git stash // schowanie zmian
git stash list // wyświetlenie listy schowanych zmian
git stash save "message" // schowanie zmian z komentarzem
git stas pop // wyciągnięcie schowanych zmian i usunięcie ich ze schowka
git stash apply // wyciągnięcie schowanych zmian
git stash drop // usunięcie schowanych zmian
git stash clear // usunięcie wszystkich schowanych zmian
