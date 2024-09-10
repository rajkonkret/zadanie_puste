<?php

//================================================================
// Definicja interfejsu dla składników kawy
//
// Uwaga:
// - interfejsy są w PHP 8.3
// - interfejsy nie mogą zawierać metod
// - interfejsy nie mogą zaw
//----------------------------------------------------------------



class Kawa
{
    private $składniki = [];

    public function dodajSkładnik($składnik)
    {
        $this->składniki[] = $składnik;
        echo "Dodano składnik: $składnik\n";
    }

    public function parzKawę()
    {
        if (empty($this->składniki)) {
            echo "Nie dodano żadnych składników!\n";
            return;
        }
        echo "Parzenie kawy...\n";
        sleep(2); // symulacja czasu parzenia
        echo "Kawa została zaparzona!\n";
    }

    public function serwujKawę()
    {
        if (empty($this->składniki)) {
            echo "Nie ma kawy do serwowania!\n";
            return;
        }
        echo "Serwuję kawę z następującymi składnikami:\n";
        foreach ($this->składniki as $składnik) {
            echo "- $składnik\n";
        }
    }
}

// Przykładowe użycie
$mojaKawa = new Kawa();
$mojaKawa->dodajSkładnik("kawa mielona");
$mojaKawa->dodajSkładnik("woda");
$mojaKawa->parzKawę();
$mojaKawa->serwujKawę();
