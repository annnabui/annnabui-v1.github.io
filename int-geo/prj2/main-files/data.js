const treeData = {
    "name": "Underground Railroad",
    "children": [
      {
        "name": "Abolitionist Activists & Organizers",
        "children": [
          { "name": "William Lloyd Garrison" },
          { "name": "Lucretia Mott" },
          { "name": "James Mott" },
          { "name": "Lydia Maria Child" },
          { "name": "Gerrit Smith" },
          { "name": "Frederick Douglass" },
          { "name": "Anna Murray Douglass" }
        ]
      },
      {
        "name": "Conductors",
        "children": [
          { "name": "Harriet Tubman" },
          { "name": "Levi Coffin" },
          { "name": "Vestal Coffin" },
          { "name": "John Hopper" },
          { "name": "Rev. John Rankin" }
        ]
      },
      {
        "name": "Station Masters",
        "children": [
          { "name": "Isaac T. Hopper" },
          { "name": "William Still" },
          { "name": "Thomas Garrett" },
          { "name": "Mary Ann Shadd" },
          { "name": "John Brown" }
        ]
      },
      {
        "name": "Public Speakers, Authors & Advocates",
        "children": [
          { "name": "David Ruggles" },
          { "name": "Henry Bibb" },
          { "name": "Henry 'Box' Brown" }
        ]
      },
      {
        "name": "Martyrs & Journalists",
        "children": [
          { "name": "Elijah Parish Lovejoy" }
        ]
      }
    ]
}

const linkData = [
  {"source": "Isaac T. Hopper", "target": "William Lloyd Garrison"},
  {"source": "Isaac T. Hopper", "target": "David Ruggles"},
  {"source": "Isaac T. Hopper", "target": "Lucretia Mott"},
  {"source": "Isaac T. Hopper", "target": "John Hopper"},
  {"source": "Isaac T. Hopper", "target": "Lydia Maria Child"},
  {"source": "Vestal Coffin", "target": "Levi Coffin"},
  {"source": "Levi Coffin", "target": "Vestal Coffin"},
  {"source": "Levi Coffin", "target": "Rev. John Rankin"},
  {"source": "William Lloyd Garrison", "target": "Isaac T. Hopper"},
  {"source": "William Lloyd Garrison", "target": "Frederick Douglass"},
  {"source": "William Lloyd Garrison", "target": "Gerrit Smith"},
  {"source": "William Lloyd Garrison", "target": "Elijah Parish Lovejoy"},
  {"source": "David Ruggles", "target": "Isaac T. Hopper"},
  {"source": "David Ruggles", "target": "Frederick Douglass"},
  {"source": "David Ruggles", "target": "Anna Murray Douglass"},
  {"source": "Lucretia Mott", "target": "Isaac T. Hopper"},
  {"source": "Lucretia Mott", "target": "Lydia Maria Child"},
  {"source": "Lucretia Mott", "target": "James Mott"},
  {"source": "James Mott", "target": "Lucretia Mott"},
  {"source": "James Mott", "target": "John Hopper"},
  {"source": "Rev. John Rankin", "target": "Levi Coffin"},
  {"source": "William Still", "target": "Henry 'Box' Brown"},
  {"source": "William Still", "target": "Thomas Garrett"},
  {"source": "William Still", "target": "Harriet Tubman"},
  {"source": "William Still", "target": "Lydia Maria Child"},
  {"source": "William Still", "target": "Anna Murray Douglass"},
  {"source": "Henry 'Box' Brown", "target": "William Still"},
  {"source": "Thomas Garrett", "target": "William Still"},
  {"source": "Thomas Garrett", "target": "Harriet Tubman"},
  {"source": "Harriet Tubman", "target": "William Still"},
  {"source": "Harriet Tubman", "target": "John Brown"},
  {"source": "Harriet Tubman", "target": "Gerrit Smith"},
  {"source": "Henry Bibb", "target": "Mary Ann Shedd"},
  {"source": "Mary Ann Shedd", "target": "Henry Bibb"},
  {"source": "Mary Ann Shedd", "target": "Frederick Douglass"},
  {"source": "John Brown", "target": "Harriet Tubman"},
  {"source": "John Brown", "target": "Frederick Douglass"},
  {"source": "John Brown", "target": "Gerrit Smith"},
  {"source": "John Brown", "target": "Elijah Parish Lovejoy"},
  {"source": "Frederick Douglass", "target": "William Lloyd Garrison"},
  {"source": "Frederick Douglass", "target": "David Ruggles"},
  {"source": "Frederick Douglass", "target": "Mary Ann Shedd"},
  {"source": "Frederick Douglass", "target": "John Brown"},
  {"source": "Frederick Douglass", "target": "Anna Murray Douglass"},
  {"source": "John Hopper", "target": "Isaac T. Hopper"},
  {"source": "John Hopper", "target": "James Mott"},
  {"source": "Lydia Maria Child", "target": "Isaac T. Hopper"},
  {"source": "Lydia Maria Child", "target": "Lucretia Mott"},
  {"source": "Lydia Maria Child", "target": "William Still"},
  {"source": "Gerrit Smith", "target": "William Lloyd Garrison"},
  {"source": "Gerrit Smith", "target": "Harriet Tubman"},
  {"source": "Gerrit Smith", "target": "John Brown"},
  {"source": "Anna Murray Douglass", "target": "David Ruggles"},
  {"source": "Anna Murray Douglass", "target": "William Still"},
  {"source": "Anna Murray Douglass", "target": "Frederick Douglass"},
  {"source": "Elijah Parish Lovejoy", "target": "William Lloyd Garrison"},
  {"source": "Elijah Parish Lovejoy", "target": "John Brown"},
]
  