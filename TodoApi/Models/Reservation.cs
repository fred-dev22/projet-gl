using System;

namespace webapi.Models
{
    public class Reservation
    {
        public Guid ID { get; set; }

        public string Nom { get; set; }

        public string Prenom { get; set; }

        public DateTime DateReservetion { get; set; }

        public string NomAgence { get; set; }

        public DateTime DateDeDepart { get; set; }

        public string VilleDeDepart { get; set; }

        public string VilleArriver { get; set; }

        public int PrixUnitaire { get; set; }

        public int PrixTotalVerser { get; set; }

        public int NombreDePlace { get; set; }

        public string ListNumerosDeSiege { get; set; }

        public string NumeroDeTelephone { get; set; }

        public string NumeroDeTelephonePourDepot { get; set; }

        public string NumCNI { get; set; }

        public DateTime HeureDeDepart { get; set; }

    }
}