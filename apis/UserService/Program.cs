using System.Security.Claims;
using Microsoft.AspNetCore.Authentication.JwtBearer;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle



builder.Services.AddCors((options) =>
{
    options.AddDefaultPolicy(policy => policy.WithOrigins("http://localhost:4200")
        .AllowAnyMethod()
        .AllowAnyHeader()
        .AllowCredentials());
         
           
    
});

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(JwtBearerDefaults.AuthenticationScheme, options =>
    {
        options.Authority = "https://dev-nuecetykz5g7lgw4.us.auth0.com";
        options.Audience = "http://localhost:5133";
        
        //  options.RequireHttpsMetadata = false;
       
        //  options.MetadataAddress = "https://dev-nuecetykz5g7lgw4.us.auth0.com/.well-known/openid-configuration";
        //  options.TokenValidationParameters.ValidateAudience = false;
        options.TokenValidationParameters.NameClaimType = ClaimTypes.NameIdentifier;
    });
builder.Services.AddAuthorization();



builder.Services.AddControllers();
var app = builder.Build();
app.UseStaticFiles();
app.UseRouting();
app.UseCors();

app.MapControllers();
app.UseAuthentication();
app.UseAuthorization();



