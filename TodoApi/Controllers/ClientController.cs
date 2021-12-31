using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Net.Mail;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using webapi.Data;
using webapi.Models;

namespace webapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ClientController : ControllerBase
    {


        private readonly ILogger<ClientController> _logger;
        private readonly MyContext dbContext;


        public ClientController(ILogger<ClientController> logger, MyContext MyContext)
        {
            _logger = logger;
            dbContext = MyContext;

        }
        private async Task<Client> CreateUser(Client client)
        {
            Guid Guid = Guid.NewGuid();
            client.ID = Guid;
            client.DateInscription = DateTime.UtcNow;
            this.dbContext.Client.Add(client);
            await this.dbContext.SaveChangesAsync();
            return client;
        }


        [HttpPost("/create_client")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Guid))]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(string))]
        public async Task<ActionResult<Client>> CreateUserPost([FromBody][Required] Client client)
        {
            if (client.Nom == "" || client.Nom == null)
            {
            
            }

            try
            {
                MailAddress mail = new MailAddress(client.Email);
            }
            catch
            {
               // throw  new HttpResponseException("adresse email invalide");

            }

            return await CreateUser(client);
        }


        [HttpPost("/connect_client")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Guid))]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(string))]
        public async Task<ActionResult<Client>> ConnectUser([FromBody][Required] Credentials credentials)
        {
            return await this.dbContext.Client.FirstOrDefaultAsync(clien => (clien.Email == credentials.Email && clien.Password == credentials.MotDePasse));
        }

        [HttpGet("/getAllClient")]
        public async Task<List<Client>> GetUsersAsync()
        {
            return await dbContext.Client.ToListAsync();
        }



        [HttpGet("/getClient/{ClientId:guid}")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(bool))]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(string))]
        public async Task<ActionResult<Client>> getUser([FromRoute][Required] Guid ClientId)
        {
            Client client = await dbContext.Client.FindAsync(ClientId);
            return client;
        }

        [HttpPost("/updateClient/{ClientId:guid}")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(bool))]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(string))]
        public async Task<ActionResult<Client>> update([FromBody][Required] Client client, [FromRoute][Required] Guid ClientId)
        {
            if (client != null)
            {
                Client cli = new Client
                {
                    ID = ClientId,
                    Nom = client.Nom,
                    Password = client.Password,
                    DateInscription = client.DateInscription,
                    NumCNI = client.NumCNI,
                    Prenom = client.Prenom,
                    Adresse = client.Adresse,
                    NumeroTelephone = client.NumeroTelephone,
                    Email = client.Email
                };
                dbContext.Attach(cli).State = EntityState.Modified;
                await dbContext.SaveChangesAsync();
                return cli;
            }
            return null;
        }
        [HttpPost("/updateClientPassword/{ClientId:guid}")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(bool))]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(string))]
        public Task<ActionResult<Client>> updatePassword([FromBody][Required] Credentials credentials, [FromRoute][Required] Guid ClientId)
        {
            throw new NotImplementedException();
            
        }
    }
}