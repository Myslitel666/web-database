using System;
using System.Collections.Generic;

namespace web_database_backend.Models;

public partial class MenuItem
{
    public int Id { get; set; }

    public string? Title { get; set; }

    public string? Url { get; set; }

    public int? ParentId { get; set; }

    public int Order { get; set; }
}
