using Microsoft.EntityFrameworkCore;
using webapi.Models;

namespace webapi.Data
{
    public class MyContext : DbContext
    {
        public MyContext (DbContextOptions<MyContext> options)
            : base(options)
        {
            
        }

      
        public DbSet<Client> Client { get; set; }
         

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
            modelBuilder.Entity<Client>().ToTable("Clients");
          
        }
    }
}

