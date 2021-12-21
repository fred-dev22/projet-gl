using System;

namespace webapi.Models
{
    public class Client : Personne
    {
       public Guid ID {get;set;}
       public string Password{get;set;}
       public DateTime DateInscription {get;set;}

       public string NumCNI {get;set;}
    }
}
