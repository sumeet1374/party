using Microsoft.AspNetCore.Mvc;

namespace UserService.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class ProfileController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(new { Name=User.Identity?.Name});
    }
}