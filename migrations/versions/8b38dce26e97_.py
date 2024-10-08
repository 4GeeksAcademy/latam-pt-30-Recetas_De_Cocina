"""empty message

Revision ID: 8b38dce26e97
Revises: ec2f7baaff4b
Create Date: 2024-07-23 03:35:04.864283

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8b38dce26e97'
down_revision = 'ec2f7baaff4b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('categoria',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('platos', sa.String(length=50), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('informacion_nutritiva',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('calorias', sa.Float(), nullable=False),
    sa.Column('carbohidratos', sa.Float(), nullable=False),
    sa.Column('energia', sa.Float(), nullable=True),
    sa.Column('grasa', sa.Float(), nullable=True),
    sa.Column('proteina', sa.Float(), nullable=True),
    sa.Column('fibra', sa.Float(), nullable=True),
    sa.Column('azucares', sa.Float(), nullable=False),
    sa.Column('grasas_saturadas', sa.Float(), nullable=True),
    sa.Column('sodio', sa.Float(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('ingredientes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre', sa.String(length=250), nullable=False),
    sa.Column('cantidad', sa.Float(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('pasos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('description', sa.String(length=50), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('plato',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre', sa.String(length=50), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('plato')
    op.drop_table('pasos')
    op.drop_table('ingredientes')
    op.drop_table('informacion_nutritiva')
    op.drop_table('categoria')
    # ### end Alembic commands ###
