using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using web_database_backend.Context;
using web_database_backend.Models;

namespace web_database_backend.Controllers
{
    [Route("api/menuItems")]
    [ApiController]
    public class MenuItemsController : ControllerBase
    {
        private readonly WebDatabaseContext _webDatabaseContext;

        public MenuItemsController()
        {
            _webDatabaseContext = new WebDatabaseContext();
        }

        // GET: api/menuItems/getParentMenuItems
        [HttpGet("getParentMenuItems")]
        public async Task<ActionResult<IEnumerable<MenuItem>>> GetParentMenuItems()
        {
            return await _webDatabaseContext.MenuItems
                .Where(item => item.ParentId == null)
                .OrderBy(item => item.Order) // Дополнительная сортировка по полю Order
                .ToListAsync();
        }
    }
}